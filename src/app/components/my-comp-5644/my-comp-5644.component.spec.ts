import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5644Component } from './my-comp-5644.component';

describe('MyComp5644Component', () => {
  let component: MyComp5644Component;
  let fixture: ComponentFixture<MyComp5644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
