import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5923Component } from './my-comp-5923.component';

describe('MyComp5923Component', () => {
  let component: MyComp5923Component;
  let fixture: ComponentFixture<MyComp5923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
