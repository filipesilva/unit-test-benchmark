import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8223Component } from './my-comp-8223.component';

describe('MyComp8223Component', () => {
  let component: MyComp8223Component;
  let fixture: ComponentFixture<MyComp8223Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
