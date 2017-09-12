import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5394Component } from './my-comp-5394.component';

describe('MyComp5394Component', () => {
  let component: MyComp5394Component;
  let fixture: ComponentFixture<MyComp5394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
