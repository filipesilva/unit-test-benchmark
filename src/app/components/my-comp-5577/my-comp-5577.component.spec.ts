import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5577Component } from './my-comp-5577.component';

describe('MyComp5577Component', () => {
  let component: MyComp5577Component;
  let fixture: ComponentFixture<MyComp5577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
