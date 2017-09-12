import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6898Component } from './my-comp-6898.component';

describe('MyComp6898Component', () => {
  let component: MyComp6898Component;
  let fixture: ComponentFixture<MyComp6898Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6898Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
