import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8439Component } from './my-comp-8439.component';

describe('MyComp8439Component', () => {
  let component: MyComp8439Component;
  let fixture: ComponentFixture<MyComp8439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
