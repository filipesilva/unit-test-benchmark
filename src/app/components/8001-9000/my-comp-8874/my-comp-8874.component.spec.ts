import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8874Component } from './my-comp-8874.component';

describe('MyComp8874Component', () => {
  let component: MyComp8874Component;
  let fixture: ComponentFixture<MyComp8874Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8874Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
