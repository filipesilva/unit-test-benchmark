import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6908Component } from './my-comp-6908.component';

describe('MyComp6908Component', () => {
  let component: MyComp6908Component;
  let fixture: ComponentFixture<MyComp6908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
