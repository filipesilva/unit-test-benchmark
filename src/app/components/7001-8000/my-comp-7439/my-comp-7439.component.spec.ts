import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7439Component } from './my-comp-7439.component';

describe('MyComp7439Component', () => {
  let component: MyComp7439Component;
  let fixture: ComponentFixture<MyComp7439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
