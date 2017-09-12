import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6024Component } from './my-comp-6024.component';

describe('MyComp6024Component', () => {
  let component: MyComp6024Component;
  let fixture: ComponentFixture<MyComp6024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
