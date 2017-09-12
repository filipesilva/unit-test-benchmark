import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7341Component } from './my-comp-7341.component';

describe('MyComp7341Component', () => {
  let component: MyComp7341Component;
  let fixture: ComponentFixture<MyComp7341Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
