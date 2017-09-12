import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp816Component } from './my-comp-816.component';

describe('MyComp816Component', () => {
  let component: MyComp816Component;
  let fixture: ComponentFixture<MyComp816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
