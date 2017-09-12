import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8897Component } from './my-comp-8897.component';

describe('MyComp8897Component', () => {
  let component: MyComp8897Component;
  let fixture: ComponentFixture<MyComp8897Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8897Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
