import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7735Component } from './my-comp-7735.component';

describe('MyComp7735Component', () => {
  let component: MyComp7735Component;
  let fixture: ComponentFixture<MyComp7735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
