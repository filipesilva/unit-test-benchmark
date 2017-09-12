import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8553Component } from './my-comp-8553.component';

describe('MyComp8553Component', () => {
  let component: MyComp8553Component;
  let fixture: ComponentFixture<MyComp8553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
