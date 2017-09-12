import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8078Component } from './my-comp-8078.component';

describe('MyComp8078Component', () => {
  let component: MyComp8078Component;
  let fixture: ComponentFixture<MyComp8078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
