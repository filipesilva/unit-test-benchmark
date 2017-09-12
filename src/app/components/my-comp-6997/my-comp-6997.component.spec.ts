import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6997Component } from './my-comp-6997.component';

describe('MyComp6997Component', () => {
  let component: MyComp6997Component;
  let fixture: ComponentFixture<MyComp6997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
