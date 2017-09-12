import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6026Component } from './my-comp-6026.component';

describe('MyComp6026Component', () => {
  let component: MyComp6026Component;
  let fixture: ComponentFixture<MyComp6026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
