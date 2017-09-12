import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4725Component } from './my-comp-4725.component';

describe('MyComp4725Component', () => {
  let component: MyComp4725Component;
  let fixture: ComponentFixture<MyComp4725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
