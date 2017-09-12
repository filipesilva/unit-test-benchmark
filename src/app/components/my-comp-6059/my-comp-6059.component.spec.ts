import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6059Component } from './my-comp-6059.component';

describe('MyComp6059Component', () => {
  let component: MyComp6059Component;
  let fixture: ComponentFixture<MyComp6059Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6059Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6059Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
