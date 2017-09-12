import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8577Component } from './my-comp-8577.component';

describe('MyComp8577Component', () => {
  let component: MyComp8577Component;
  let fixture: ComponentFixture<MyComp8577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
