import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp194Component } from './my-comp-194.component';

describe('MyComp194Component', () => {
  let component: MyComp194Component;
  let fixture: ComponentFixture<MyComp194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
