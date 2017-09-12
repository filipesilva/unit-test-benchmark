import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1553Component } from './my-comp-1553.component';

describe('MyComp1553Component', () => {
  let component: MyComp1553Component;
  let fixture: ComponentFixture<MyComp1553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
