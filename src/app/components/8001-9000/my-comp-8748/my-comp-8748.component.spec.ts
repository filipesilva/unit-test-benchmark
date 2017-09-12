import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8748Component } from './my-comp-8748.component';

describe('MyComp8748Component', () => {
  let component: MyComp8748Component;
  let fixture: ComponentFixture<MyComp8748Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8748Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8748Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
