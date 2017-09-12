import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4850Component } from './my-comp-4850.component';

describe('MyComp4850Component', () => {
  let component: MyComp4850Component;
  let fixture: ComponentFixture<MyComp4850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
