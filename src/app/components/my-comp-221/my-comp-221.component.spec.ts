import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp221Component } from './my-comp-221.component';

describe('MyComp221Component', () => {
  let component: MyComp221Component;
  let fixture: ComponentFixture<MyComp221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
