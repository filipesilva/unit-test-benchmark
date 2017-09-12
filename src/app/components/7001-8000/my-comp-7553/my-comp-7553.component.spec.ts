import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7553Component } from './my-comp-7553.component';

describe('MyComp7553Component', () => {
  let component: MyComp7553Component;
  let fixture: ComponentFixture<MyComp7553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
