import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7198Component } from './my-comp-7198.component';

describe('MyComp7198Component', () => {
  let component: MyComp7198Component;
  let fixture: ComponentFixture<MyComp7198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
