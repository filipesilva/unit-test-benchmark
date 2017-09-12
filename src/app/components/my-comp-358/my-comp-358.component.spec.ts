import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp358Component } from './my-comp-358.component';

describe('MyComp358Component', () => {
  let component: MyComp358Component;
  let fixture: ComponentFixture<MyComp358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
