import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5947Component } from './my-comp-5947.component';

describe('MyComp5947Component', () => {
  let component: MyComp5947Component;
  let fixture: ComponentFixture<MyComp5947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
