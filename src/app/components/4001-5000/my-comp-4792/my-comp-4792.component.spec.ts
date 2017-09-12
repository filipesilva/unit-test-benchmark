import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4792Component } from './my-comp-4792.component';

describe('MyComp4792Component', () => {
  let component: MyComp4792Component;
  let fixture: ComponentFixture<MyComp4792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
