import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7577Component } from './my-comp-7577.component';

describe('MyComp7577Component', () => {
  let component: MyComp7577Component;
  let fixture: ComponentFixture<MyComp7577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
