import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7233Component } from './my-comp-7233.component';

describe('MyComp7233Component', () => {
  let component: MyComp7233Component;
  let fixture: ComponentFixture<MyComp7233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
