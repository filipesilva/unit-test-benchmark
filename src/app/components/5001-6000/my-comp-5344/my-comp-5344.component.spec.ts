import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5344Component } from './my-comp-5344.component';

describe('MyComp5344Component', () => {
  let component: MyComp5344Component;
  let fixture: ComponentFixture<MyComp5344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
