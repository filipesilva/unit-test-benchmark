import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4923Component } from './my-comp-4923.component';

describe('MyComp4923Component', () => {
  let component: MyComp4923Component;
  let fixture: ComponentFixture<MyComp4923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
