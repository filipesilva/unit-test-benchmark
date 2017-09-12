import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6185Component } from './my-comp-6185.component';

describe('MyComp6185Component', () => {
  let component: MyComp6185Component;
  let fixture: ComponentFixture<MyComp6185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
