import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6471Component } from './my-comp-6471.component';

describe('MyComp6471Component', () => {
  let component: MyComp6471Component;
  let fixture: ComponentFixture<MyComp6471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
