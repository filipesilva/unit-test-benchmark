import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8519Component } from './my-comp-8519.component';

describe('MyComp8519Component', () => {
  let component: MyComp8519Component;
  let fixture: ComponentFixture<MyComp8519Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8519Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8519Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
