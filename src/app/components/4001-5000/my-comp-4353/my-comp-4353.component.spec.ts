import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4353Component } from './my-comp-4353.component';

describe('MyComp4353Component', () => {
  let component: MyComp4353Component;
  let fixture: ComponentFixture<MyComp4353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
