import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6856Component } from './my-comp-6856.component';

describe('MyComp6856Component', () => {
  let component: MyComp6856Component;
  let fixture: ComponentFixture<MyComp6856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
