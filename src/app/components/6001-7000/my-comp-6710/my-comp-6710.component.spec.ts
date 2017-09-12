import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6710Component } from './my-comp-6710.component';

describe('MyComp6710Component', () => {
  let component: MyComp6710Component;
  let fixture: ComponentFixture<MyComp6710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
