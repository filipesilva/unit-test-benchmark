import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4251Component } from './my-comp-4251.component';

describe('MyComp4251Component', () => {
  let component: MyComp4251Component;
  let fixture: ComponentFixture<MyComp4251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
