import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6419Component } from './my-comp-6419.component';

describe('MyComp6419Component', () => {
  let component: MyComp6419Component;
  let fixture: ComponentFixture<MyComp6419Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6419Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
