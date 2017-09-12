import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6151Component } from './my-comp-6151.component';

describe('MyComp6151Component', () => {
  let component: MyComp6151Component;
  let fixture: ComponentFixture<MyComp6151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
