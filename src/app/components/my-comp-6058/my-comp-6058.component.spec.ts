import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6058Component } from './my-comp-6058.component';

describe('MyComp6058Component', () => {
  let component: MyComp6058Component;
  let fixture: ComponentFixture<MyComp6058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
