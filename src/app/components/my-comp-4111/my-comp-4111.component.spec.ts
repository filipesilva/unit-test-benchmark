import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4111Component } from './my-comp-4111.component';

describe('MyComp4111Component', () => {
  let component: MyComp4111Component;
  let fixture: ComponentFixture<MyComp4111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
