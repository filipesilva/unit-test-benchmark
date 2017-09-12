import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8685Component } from './my-comp-8685.component';

describe('MyComp8685Component', () => {
  let component: MyComp8685Component;
  let fixture: ComponentFixture<MyComp8685Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8685Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
