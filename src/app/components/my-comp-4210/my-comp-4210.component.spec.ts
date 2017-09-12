import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4210Component } from './my-comp-4210.component';

describe('MyComp4210Component', () => {
  let component: MyComp4210Component;
  let fixture: ComponentFixture<MyComp4210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
