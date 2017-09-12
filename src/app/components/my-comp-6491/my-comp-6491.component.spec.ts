import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6491Component } from './my-comp-6491.component';

describe('MyComp6491Component', () => {
  let component: MyComp6491Component;
  let fixture: ComponentFixture<MyComp6491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
