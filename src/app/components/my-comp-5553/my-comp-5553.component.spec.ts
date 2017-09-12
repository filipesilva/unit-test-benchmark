import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5553Component } from './my-comp-5553.component';

describe('MyComp5553Component', () => {
  let component: MyComp5553Component;
  let fixture: ComponentFixture<MyComp5553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
