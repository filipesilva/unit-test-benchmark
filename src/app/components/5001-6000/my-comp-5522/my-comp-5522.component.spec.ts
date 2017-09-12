import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5522Component } from './my-comp-5522.component';

describe('MyComp5522Component', () => {
  let component: MyComp5522Component;
  let fixture: ComponentFixture<MyComp5522Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5522Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
