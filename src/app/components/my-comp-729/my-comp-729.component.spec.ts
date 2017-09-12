import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp729Component } from './my-comp-729.component';

describe('MyComp729Component', () => {
  let component: MyComp729Component;
  let fixture: ComponentFixture<MyComp729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
