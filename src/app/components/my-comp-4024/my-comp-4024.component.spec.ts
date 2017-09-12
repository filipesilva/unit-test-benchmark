import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4024Component } from './my-comp-4024.component';

describe('MyComp4024Component', () => {
  let component: MyComp4024Component;
  let fixture: ComponentFixture<MyComp4024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
